import { FILTER_BUTTONS } from "../consts"
import { useTodoStore } from "../stores/todoStore"
import { type filterValue } from "../types"

export const Filters: React.FC = () => {
    const filterSelected = useTodoStore((state) => state.filter)
    const handleFilterChange = useTodoStore((state) => state.handleFilterChange)

    const filterChange = (filterChange : filterValue) => {
        handleFilterChange(filterChange)
    }

    return (
        <ul className="filters">
            {
                Object.entries(FILTER_BUTTONS).map(([key, {literal, href}]) => {
                    return (
                        <li key={key} >
                            <a 
                                href={href}
                                className={ key === filterSelected ? 'selected' : ''}
                                onClick={(e) => {
                                    e.preventDefault()
                                    filterChange(key as filterValue)
                                }}
                            >
                                {literal}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}