import React from 'react';

const SidebarRow = ({ selected, Icon, title }) => {
  return (
    <div className={`sidebar-row ${selected && 'selected'}`}>
      <Icon className='sidebar-row_icon' />
      <h2 className='sidebar-row_title'>{title}</h2>
    </div>
  );
};

export default SidebarRow;
