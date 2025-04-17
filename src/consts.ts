export const TODO_FILTERS = {
    All : 'All',
    ACTIVE: 'Active',
    COMPLETED: 'Completed'
} as const


export const FILTER_BUTTONS = {
    [TODO_FILTERS.All]: {
        literal: 'All',
        href: `/?filter=${TODO_FILTERS.All}`
    },
    [TODO_FILTERS.ACTIVE]: {
        literal: 'Active',
        href: `/?filter=${TODO_FILTERS.ACTIVE}`
    },
    [TODO_FILTERS.COMPLETED]: {
        literal: 'Completed',
        href: `/?filter=${TODO_FILTERS.COMPLETED}`
    }
} as const