import { Filters } from "./Filters"
import { filterValue } from "../types"

interface Props {
    activeCount: number
    completedCount: number
    filterSelected: filterValue
    onClearCompleted: () => void
    handleFilterChange: (filter: filterValue) => void
}

export const Footer: React.FC<Props> = ({ activeCount, completedCount, filterSelected, onClearCompleted, handleFilterChange }) => {
    return (
        <footer>
            <span>
                <strong>{activeCount}</strong> Todos left
            </span>

            <Filters 
                filterSelected={filterSelected}
                handleFilterChange={handleFilterChange}
            />

            {
                completedCount > 0 && (
                    <button
                        onClick={onClearCompleted}
                    >
                        Clear completed
                    </button>
                )
            }
        </footer>
    )
}