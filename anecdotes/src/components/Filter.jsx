import { useAnecdotesActions } from '../store'

const Filter = () => {
    const { setFilter } = useAnecdotesActions()

    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input onChange={(e) => setFilter(e.target.value)} data-testid="filter" />
        </div>
    )
}

export default Filter