import { useContext } from 'react';
import { API } from '@stoplight/elements';
import { NonIdealState } from '@stoplight/elements-core';
import { Box } from '@stoplight/mosaic';
import { GlobalContext } from '../context';

export const Swagger = () => {
  const { apiDescriptionUrl } = useContext(GlobalContext);

  return (
    <Box flex={1} overflowY="hidden">
      {apiDescriptionUrl ? (
        <API apiDescriptionUrl={apiDescriptionUrl} router="hash" />
      ) : (
        <NonIdealState
          title="Empty Document"
          description="Load OpenAPI definitions to view documentation."
          icon="info-circle"
        />
      )}
    </Box>
  );
};
