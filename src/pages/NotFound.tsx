export const NotFound = () => {
   return (
      <div className="bg-background">
         <h1 className="fixed left-1/2 m-10 border border-foreground-muted -translate-x-1/2 text-4xl text-center text-foreground bg-background-highlight/75 backdrop-blur-xs p-5 rounded-2xl animate-fade-in">
            Page not found.
         </h1>
         <img
            src="https://pbs.twimg.com/media/HCQsLfHaMAAVp6S?format=jpg&name=small"
            className="flex mx-auto"
         />
      </div>
   );
};
