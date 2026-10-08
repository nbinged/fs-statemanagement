import { useAnecdotesActions } from '../store'
import AnecdoteList from "./AnecdoteList.jsx";

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

const AnecdoteForm = () => {
    const { add } = useAnecdotesActions()

    const addAnecdote= (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        add({ id: generateId(), content, votes: 0 })
        e.target.reset()
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div>
                    <input name="anecdote"/>
                    <button type="submit">create</button>
                </div>
            </form>
        </div>
    )
}

export default AnecdoteForm