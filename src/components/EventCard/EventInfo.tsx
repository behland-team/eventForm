export function EventInfo() {
  return (
    <div className="mt-4 flex items-center justify-between" style={{ width: 600 }}>
      <p
        className="text-right"
        style={{ 
          fontFamily: "var(--font-vazirmatn)", 
          fontWeight: 600, 
          fontSize: 20, 
          color: "#4D4D4D", 
          background: "none" 
        }}
      >
        بهلند : تحولی در یادگیری هدفمند
      </p>
      <span
        className="rounded-md px-3 py-1"
        style={{ 
          color: "#4D4D4D", 
          fontFamily: "var(--font-vazirmatn)", 
          fontWeight: 600, 
          fontSize: 20, 
          background: "none" 
        }}
      >
        آنلاین | حضور آزاد و رایگان
      </span>
    </div>
  );
}
