import TableHeader from '@/components/molecules/TableHeader/TableHeader';
import TableRow from '@/components/molecules/TableRow/TableRow';
import React from 'react';


const projects = [
  {
    name: 'Dance studio- Webpage',
    person: 'Sriram Sarvade',
    role: 'CEO',
    date: 'March 05, 2020',
    status: 'completed',
  },
  {
    name: 'Real Estate Homepage',
    person: 'Geeta Ingle',
    role: 'Manager',
    date: 'Dec 25, 2020',
    status: 'ongoing',
  },
];

const ProjectsTable: React.FC = () => {
  return (
    <div >
      <table className="w-full">
        
        <tbody>
          {projects.map((project, index) => (
            <TableRow key={index} project={project} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;
