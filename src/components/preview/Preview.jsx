import "./Preview.css";

const Preview = ({ project }) => {
  if (!project) return null;

  return (
    <div className="archive-preview">
      {project.previewVideo ? (
        <video 
          src={project.previewVideo} 
          autoPlay 
          loop 
          muted 
          playsInline 
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      ) : (
        <img 
          src={project.heroImage || ""} 
          alt="currently selected source" 
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}
      <div className="archive-preview-overlay">
        <span>Click</span>
      </div>
    </div>
  );
};

export default Preview;
