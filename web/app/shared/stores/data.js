/*
 * Generalized data store for database entities.
 */

// action types
const A_DATA_INIT   = Symbol()
const A_DATA_CREATE = Symbol()
const A_DATA_UPDATE = Symbol()
const A_DATA_DELETE = Symbol()

// action creator
export function initialize (error, payload, meta) {
    // body...
}

// reducer
export default function bookings (store = [], action) {
    switch (action.type) {

    // reset the data-store with fresh data
    case A_DATA_INIT:
        return [ ...action.payload ]

    // modifies the store by adding or updating existing items
    case A_DATA_CREATE:
    case A_DATA_UPDATE:
        return action.payload.reduce(
            (store, booking) => {
                // add bookings that do not exist
                if (store.every(b => b.id !== booking.id)) return [ ...store, booking ]
                // update bookings that do exist
                return store.map(b => b.id === booking.id ? booking : b)
            },
            store
        )

    // delete items from data-store
    case A_DATA_DELETE:
        return store.filter(b => !action.payload.some(del => b.id === del.id))

    // NOOP
    default:
        return store
    }
}
