import "./styles.css";

function StaffCard({ staff }) {
  return (
    <div className="staff-card">
      <h2 className="staff-name" style={{ color: staff.color }}>
        {staff.name}
      </h2>
      <span className="staff-hr" style={{ backgroundColor: staff.color }} />
      <p className="staff-text">{staff.text}</p>
      <button style={{ color: staff.color }}>Read More</button>
    </div>
  );
}

export default StaffCard;
