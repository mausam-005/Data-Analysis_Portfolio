import {useEffect} from "react"

export default function Modal({project,onClose}){
  useEffect(()=>{
    const handleEsc=(e)=>{
      if(e.key==="Escape") onClose()
    }
    document.addEventListener("keydown",handleEsc)
    return()=>document.removeEventListener("keydown",handleEsc)
  },[onClose])

  if(!project) return null

  return(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{project.name}</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-image">
          <img src={project.image} alt={project.name}/>
        </div>
        <p className="modal-desc">{project.description}</p>
        <div className="modal-actions">
          <button className="modal-btn-cancel" onClick={onClose}>Cancel</button>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="modal-btn-github"
          >
            View GitHub Repo
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="modal-btn-live"
          >
            {project.secondaryLive ? "View Dashboard" : "Live Demo"}
          </a>
          {project.secondaryLive && (
            <a
              href={project.secondaryLive}
              target="_blank"
              rel="noreferrer"
              className="modal-btn-live"
              style={{background: 'var(--accent-purple)', borderColor: 'var(--accent-purple)'}}
            >
              {project.secondaryLiveText || "View Spreadsheet"}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
