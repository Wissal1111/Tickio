import './BigButton.css';
export default function BigButton({ children, onClick }) {
  return (
    <button className="big-button" onClick={onClick}>
      {children}
    </button>
  );
}
