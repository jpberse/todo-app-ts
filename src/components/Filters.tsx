import { FILTER_BUTTONS } from "../consts"
import { type filterValue } from "../types"

interface Props {
    filterSelected: filterValue
    handleFilterChange: (filter: filterValue) => void 
}

export const Filters: React.FC<Props> = ({ filterSelected,  handleFilterChange }) => {
    return (
        <ul>
            {
                Object.entries(FILTER_BUTTONS).map(([key, {literal, href}]) => {
                    return (
                        <li key={key} >
                            <a 
                                href={href}
                                className={ key === filterSelected ? 'selected' : ''}
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleFilterChange(key as filterValue)
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