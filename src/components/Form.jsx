export default function Form({ singleNote, setSingleNote, handleSubmit }) {
  return (
    <form style={{ background: '#2b2828' }} id="form" onSubmit={handleSubmit}>
      <label htmlFor="commenter">
        <input
          id="commenter"
          type="text"
          value={singleNote.commenter}
          onChange={(e) =>
            setSingleNote(() => ({
              ...singleNote,
              commenter: e.target.value
            }))
          }
          placeholder="author"
        />
      </label>
      <label htmlFor="comment">
        <input
          id="comment"
          type="text"
          value={singleNote.comment}
          placeholder="comment"
          onChange={(e) =>
            setSingleNote({ ...singleNote, comment: e.target.value })
          }
        />
      </label>
      <button id="comment-button" type="submit">
        Submit
      </button>
    </form>
  );
}
