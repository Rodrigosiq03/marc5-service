export type ButtonVariant = 'primary' | 'secondary' | 'danger';

export interface ButtonProps {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export type StatusType = 'Online' | 'Offline' | 'active' | 'inactive';

export interface StatusBadgeProps {
  $status: "Online" | "Offline" | "active" | "inactive";
}

export interface ProgressBarProps {
  $progress: number;
}