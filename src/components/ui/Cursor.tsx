import  { forwardRef } from 'react';

const Cursor = forwardRef<HTMLDivElement, object>((_, ref) => {
  return (
    <>
      <div 
        ref={ref}
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-plus-darker"
        style={{
          background: 'rgba(255, 255, 255, 0.8)',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s, height 0.3s, background-color 0.3s'
        }}
      />
      <style>{`
        .cursor-hover {
          width: 3rem !important;
          height: 3rem !important;
          background: rgba(0, 255, 136, 0.8) !important;
        }
      `}</style>
    </>
  );
});

Cursor.displayName = 'Cursor';

export default Cursor;