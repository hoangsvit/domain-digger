import { ExternalLinkIcon } from 'lucide-react';
import Link from 'next/link';
import type { FC } from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type DomainLinkProps = {
  domain: string;
};

const DomainLink: FC<DomainLinkProps> = ({ domain }) => (
  <>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            className="select-all underline decoration-dotted underline-offset-4"
            href={`/lookup/${domain}`}
          >
            <span>{domain}</span>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>View Domain Records</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    {!domain.startsWith('*.') && (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href={`https://${domain}`}
              target="_blank"
              rel="noreferrer nofollow"
            >
              <ExternalLinkIcon className="mx-1 inline-block h-3 w-3 -translate-y-0.5" />
            </a>
          </TooltipTrigger>
          <TooltipContent>
            <p>Visit URL</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )}
  </>
);

export default DomainLink;
