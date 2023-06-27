import { Filter } from "./Filter"

export const StudentList = ({ students }) => {
    return (
        <>
            <Filter />

            <ul role="list" className="divide-y divide-gray-100 mx-auto max-w-2xl">
                {students?.sort((a, b) => b.age - a.age).map((student) => {
                    let bgColor = '';
                    if (student?.destiny?.color === 'ROJO') bgColor = 'bg-red-500';
                    if (student?.destiny?.color === 'MARRON') bgColor = 'bg-orange-900';
                    if (student?.destiny?.color === 'VERDE') bgColor = 'bg-emerald-500';

                    return (
                        <li key={student.email} className="flex justify-between gap-x-6 py-5">
                            <div className="flex gap-x-4">
                                <img className={`h-20 w-20 flex-none rounded-full bg-gray-50 object-cover ${bgColor}`} src={student?.imageUrl} />
                                <div className="min-w-0 flex-auto">
                                    <p className="text-lg font-semibold leading-6 text-gray-900">{student?.name} {student.lastName}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{student?.gender}</p>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">{student?.age}</p>
                                </div>
                            </div>
                            <div className="hidden sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-gray-900">{student.role}</p>
                                <div className="mt-1 flex items-center gap-x-1.5">
                                    <div className="flex-none rounded-full  p-1">
                                        <div className={`h-2.5 w-2.5 rounded-full ${bgColor}`} />
                                    </div>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                        {student?.destiny?.name}
                                    </p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};