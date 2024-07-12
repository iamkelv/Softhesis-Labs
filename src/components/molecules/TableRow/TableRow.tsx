import CustomButton from '@/components/atoms/CustomButton/CustomButton';
import Text from '@/components/atoms/text/text';
import React from 'react';


interface TableRowProps {
  project: {
    name: string;
    person: string;
    role: string;
    date: string;
    status: 'completed' | 'ongoing' | string;
  };
}

const TableRow: React.FC<TableRowProps> = ({ project }) => {
  return (
    <tr className="flex justify-between items-center py-2">
      <td className="w-1/4"><Text>{project.name}</Text></td>
      <td className="w-1/4"><Text>{project.person}</Text></td>
      <td className="w-1/4"><Text>{project.role}</Text></td>
      <td className="w-1/4"><Text>{project.date}</Text></td>
      <td className="w-1/4">
        <CustomButton classNames='min-w-[200px] rounded-[10px] hover:opacity-[0.9]' label={project.status === 'completed' ? 'Completed' : 'Ongoing'} status={project.status} />
      </td>
    </tr>
  );
};

export default TableRow;
