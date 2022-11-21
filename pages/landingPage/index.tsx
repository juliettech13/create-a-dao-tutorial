import React from 'react';
import { HeaderPage } from '@aragon/apps/packages/ui-components/src/components/headers/headerPage';
import { IconDashboard } from '@aragon/apps/packages/ui-components/src/components/icons';

export function LandingPage() {
  return (
    <div>
      <HeaderPage title="Landing Page" description="description" buttonLabel='create a dao'
        crumbs={[
            {
              "label": "Finance",
              "path": "/abc"
            },
            {
              "label": "Tokens",
              "path": "/abc"
            },
            {
              "label": "Third Level",
              "path": "/abc"
            }
          ]}
        icon={IconDashboard({x: 16, y: 16})}
    />
      <h1>Landing Page</h1>
    </div>
  );
}
