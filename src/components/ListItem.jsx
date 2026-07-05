import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ className, title, to, children, onClick }) => {
  return (
    <li>
      <Link
        to={to}
        onClick={onClick}
        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors 
                  hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900
                  w-full text-sm sm:text-base"
      >
        <div className="text-sm font-medium leading-none text-slate-900 mb-2">
          {title}
        </div>
        <p className="line-clamp-2 text-xs sm:text-sm leading-snug text-slate-600">
          {children}
        </p>
      </Link>
    </li>
  );
};

export default ListItem;