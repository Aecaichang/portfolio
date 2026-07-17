import { useEffect, useRef } from 'react';
import { UserIcon, type UserIconHandle } from './user';
import { BriefcaseBusinessIcon } from './briefcase-business';
import { RocketIcon } from './rocket';
import { WrenchIcon } from './wrench';
import { GraduationCapIcon } from './graduation-cap';
import { MapPinIcon } from './map-pin';
import { GithubIcon } from './github';
import { LinkedinIcon } from './linkedin';
import { FacebookIcon } from './facebook';

const ICONS = {
  user: UserIcon,
  briefcase: BriefcaseBusinessIcon,
  rocket: RocketIcon,
  wrench: WrenchIcon,
  'graduation-cap': GraduationCapIcon,
  'map-pin': MapPinIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  facebook: FacebookIcon,
} as const;

interface AnimatedIconProps {
  name: keyof typeof ICONS;
  size?: number;
  className?: string;
}

// Bridges hover from the surrounding pill/heading (a, button, h2) to the icon,
// so the animation plays when hovering anywhere on the parent, not just the icon.
export default function AnimatedIcon({ name, size = 20, className }: AnimatedIconProps) {
  const iconRef = useRef<UserIconHandle>(null);
  const hostRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const trigger = hostRef.current?.closest('a, button, h2');
    if (!trigger) return;
    const start = () => iconRef.current?.startAnimation();
    const stop = () => iconRef.current?.stopAnimation();
    trigger.addEventListener('mouseenter', start);
    trigger.addEventListener('mouseleave', stop);
    return () => {
      trigger.removeEventListener('mouseenter', start);
      trigger.removeEventListener('mouseleave', stop);
    };
  }, []);

  const Icon = ICONS[name];
  return (
    <span ref={hostRef} className="inline-flex shrink-0">
      <Icon ref={iconRef} size={size} className={className} />
    </span>
  );
}
