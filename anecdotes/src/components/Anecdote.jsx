import { useAnecdotesActions } from '../store'

const Anecdote = ({ anecdote }) => {
    const { toggleVote } = useAnecdotesActions()

    return (
        <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
                has {anecdote.votes}
                <button onClick={() => toggleVote(anecdote.id)}>vote</button>
            </div>
        </div>
    )
}

export default Anecdote
