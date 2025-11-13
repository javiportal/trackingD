import { LucideIcon } from 'lucide-react';

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export function SidebarItem({ icon: Icon, label, isSelected, onClick }: SidebarItemProps) {
  const classes = ['sidebar-item'];
  if (isSelected) {
    classes.push('sidebar-item--active');
  }

  return (
    <button
      onClick={onClick}
      type="button"
      className={classes.join(' ')}
      style={{ color: 'var(--white)' }}
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );
}
