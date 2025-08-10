const Footer = () => {
  return (
    <footer className="py-8 my-12">
      <div className="mx-auto text-left">
        <div className="flex flex-col items-start space-y-2">
          <div className="text-6xl font-bold text-gray-400">
            Gotta Catch 'Em All
          </div>
          <div className="flex items-center font-semibold space-x-2 text-2xl text-gray-300">
            <span>Made with love</span>
            <span className="text-red-500 text-2xl">❤️</span>
            <div>in Vashi, Navi Mumbai</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
