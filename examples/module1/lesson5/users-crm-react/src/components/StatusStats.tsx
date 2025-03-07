import { useMemo } from 'react';
import { useGetUsers } from '../api/hooks/useGetUsers';
import type { User } from '../model/User';
import { getStatusColor } from '../utils/statusColors';

const StatusStats = () => {
  const { data: users, isLoading, error } = useGetUsers();

  const statusCounts = useMemo(() => {
    if (!users) return 0;

    return users.reduce((acc: Record<string, number>, user: User) => {
      acc[user.status] = (acc[user.status] || 0) + 1;
      return acc;
    }, {});
  }, [users]);

  if (isLoading) return <div>Loading stats...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {Object.entries(statusCounts).map(([status, count]) => (
        <div
          key={status}
          className="bg-white rounded-lg shadow p-4"
          data-testid="status-stats-item"
        >
          <div className="flex flex-col items-center">
            <span
              className={`px-2 py-1 rounded-lg text-sm font-medium mb-2 ${getStatusColor(
                status
              )}`}
            >
              {status}
            </span>
            <span className="text-2xl font-bold">{count}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatusStats;
