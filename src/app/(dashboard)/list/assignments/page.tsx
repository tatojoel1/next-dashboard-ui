import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, assignmentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Assignment = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden lg:table-cell ",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden lg:table-cell ",
  },
  {
    header: "Due Date",
    accessor: "dueDate",
    className: "hidden lg:table-cell ",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const AssignmentsListPage = () => {
  const renderRow = (item: Assignment) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.dueDate}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src={"/edit.png"} width={16} height={16} alt="edit" />
            </button>
          </Link>
          {role === "admin" && (
            //<button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
            //  <Image src={"/delete.png"} width={16} height={16} alt="delete" />
            //</button>
            <FormModal table="assignment" type="delete" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* Top */}
      <div className="flex item-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
          All Assignments
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" width={14} height={14} alt="search" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" width={14} height={14} alt="search" />
            </button>
            {role === "admin" && (
              //<button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              //  <Image src="/plus.png" width={14} height={14} alt="search" />
              //</button>
              <FormModal table="assignment" type="create" />
            )}
          </div>
        </div>
      </div>
      {/* List */}
      <div className="">
        <Table columns={columns} renderRow={renderRow} data={assignmentsData} />
      </div>
      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default AssignmentsListPage;
