function AuthLayOut({ children }: { children: React.ReactNode }) {
    return (
      <>        
        <h1 className="font-bold mb-3">Inner Layout</h1>
        {children}
      </>
    );
  }
  
  export default AuthLayOut;
  