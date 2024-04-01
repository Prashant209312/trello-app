const ClerkLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-200 h-full flex items-center justify-center">
      {children}
    </div>
  );
};
export default ClerkLayout;
