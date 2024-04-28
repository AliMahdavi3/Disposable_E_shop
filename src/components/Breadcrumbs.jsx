import React from 'react'
import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Breadcrumbs = ({crumbs}) => {

    if (crumbs.length <= 1) {
        return null;
    }

  return (
    <div className="container pt-5 md:px-10">
    <div className="flex items-center py-5 text-xs md:text-base">
        {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            return (
                <React.Fragment key={crumb.href}>
                    <NavLink
                        to={crumb.href}
                        className={`${isLast ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-200'
                            } hover:underline`}
                    >
                        {index === 0 ? <FaHome /> : crumb.title}
                    </NavLink>
                    {!isLast && (
                        <span className="mx-5 text-gray-500 dark:text-gray-300">
                            /
                        </span>
                    )}
                </React.Fragment>
            );
        })}
    </div>
</div>
  )
}

export default Breadcrumbs
