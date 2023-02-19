import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header className="w-full bg-yellow-200 sticky left-0 top-0 shadow p-5 flex justify-between">
        <h3 className="font-bold text-red-500 text-xl">Bánh kem Linh Linh</h3>
        <span className="text-red-500">0354340665</span>
      </header>
      <main className="bg-red-50 min-h-max px-10 py-5">{children}</main>
      <footer className="bg-yellow-200 shadow p-5">
        <span className="text-red-500">
          Chợ km72, xã EaNam, huyện EaHleo, tỉnh Daklak
        </span>
      </footer>
    </>
  );
};

export default Layout;
