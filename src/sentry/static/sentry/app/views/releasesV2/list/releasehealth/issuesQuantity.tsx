import React from 'react';

import {t, tct} from 'app/locale';
import Tooltip from 'app/components/tooltip';
import Link from 'app/components/links/link';
import Count from 'app/components/count';

import {getReleaseNewIssuesUrl} from '../../utils';

type Props = {
  orgSlug: string;
  newGroups: number;
  projectId: number;
  releaseVersion: string;
  isCompact?: boolean;
};

const IssuesQuantity = ({
  orgSlug,
  newGroups,
  projectId,
  releaseVersion,
  isCompact = false,
}: Props) => {
  const issuesQuantity = isCompact ? (
    tct('[count] issues', {
      count: <Count value={newGroups} />,
    })
  ) : (
    <Count value={newGroups} />
  );

  if (newGroups !== 0) {
    return (
      <Tooltip title={t('Open in Issues')}>
        <Link to={getReleaseNewIssuesUrl(orgSlug, projectId, releaseVersion)}>
          {issuesQuantity}
        </Link>
      </Tooltip>
    );
  }

  return <div>{issuesQuantity}</div>;
};

export default IssuesQuantity;
