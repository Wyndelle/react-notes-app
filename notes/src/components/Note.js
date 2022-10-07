import { MdDeleteForever } from 'react-icons/md';

const Note = () => {
  return(
    <div className="note">
      <span>im a note *note sounds*</span>
      <div className="note-footer">
        <small>date</small>
        <MdDeleteForever className='delete-icon' size='1.3em'/>
      </div>
    </div>
  )
}

export default Note;