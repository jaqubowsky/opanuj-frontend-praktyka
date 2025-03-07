export const STATUSES = {
  NEW: 'New',
  CONTACTED: 'Contacted',
  IN_PROGRESS: 'In Progress',
  QUALIFIED: 'Qualified',
  CONVERTED: 'Converted',
  REJECTED: 'Rejected',
};

export const statusColors = {
  [STATUSES.QUALIFIED]: 'bg-green-100 text-green-800',
  [STATUSES.REJECTED]: 'bg-red-100 text-red-800',
  [STATUSES.IN_PROGRESS]: 'bg-yellow-100 text-yellow-800',
  [STATUSES.CONVERTED]: 'bg-blue-100 text-blue-800',
  [STATUSES.NEW]: 'bg-purple-100 text-purple-800',
  [STATUSES.CONTACTED]: 'bg-gray-100 text-gray-800',
} as const;

export type Status = (typeof STATUSES)[keyof typeof STATUSES];

export const getStatusColor = (status: string): string => {
  return statusColors[status as Status] || 'bg-gray-100 text-gray-800';
};
