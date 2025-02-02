import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import { Dropzone, DropzoneProps } from 'src/components/dropzone/Dropzone';
import { withDesign } from 'storybook-addon-designs';

const ListMeta: Meta = {
  title: 'Amino/Dropzone',
  component: Dropzone,
  decorators: [withDesign],
  argTypes: {
    error: {
      type: 'boolean',
      description: 'Flag determine to render error border or not',
    },
    dropzoneDisabled: {
      type: 'boolean',
      defaultValue: false,
    },
    loadingText: {
      description: 'ReactNode that will be rendered when `loading` flag is on',
    },
    helperText: {
      defaultValue: '',
      type: 'string',
    },
  },
};

export default ListMeta;

const Template: Story<DropzoneProps> = ({
  dropzoneOptions,
  error,
  helperText,
  loading,
  loadingText,
  onRemove,
  dropzoneDisabled,
  uploadedFile,
  width,
}: DropzoneProps) => {
  return (
    <Dropzone
      dropzoneOptions={dropzoneOptions}
      error={error}
      helperText={helperText}
      loading={loading}
      onRemove={onRemove}
      dropzoneDisabled={dropzoneDisabled}
      uploadedFile={uploadedFile}
      width={width}
      loadingText={loadingText}
    />
  );
};
export const NoFileSelected = Template.bind({});
NoFileSelected.args = {
  loading: false,
  error: false,
  width: 215,
  dropzoneOptions: {
    onDropAccepted: () => {
      // handle accepted files here
    },
    onDropRejected: () => {
      // handle rejected files here
    },
  },
};
export const DisabledState = Template.bind({});
DisabledState.args = {
  loading: false,
  error: false,
  width: 215,
  dropzoneDisabled: true,
  dropzoneOptions: {
    onDropAccepted: () => {
      // handle accepted files here
    },
    onDropRejected: () => {
      // handle rejected files here
    },
  },
};
export const ErrorState = Template.bind({});
ErrorState.args = {
  error: true,
  width: 215,
  helperText: '',
  dropzoneOptions: {
    onDropAccepted: () => {
      // handle accepted files here
    },
    onDropRejected: () => {
      // handle rejected files here
    },
  },
};
export const HasUploadedFile = Template.bind({});
HasUploadedFile.args = {
  error: false,
  width: 215,
  helperText: '',
  uploadedFile: {
    uploadedFilename: 'file.tsc',
    uploadedSize: '14kb',
    uploadedThumbnailUrl: 'https://dummyimage.com/50x50/000/fff',
  },
  dropzoneOptions: {
    onDropAccepted: () => {
      // handle accepted files here
    },
    onDropRejected: () => {
      // handle rejected files here
    },
  },
};
export const HasUploadedFileNoFileSize = Template.bind({});
HasUploadedFileNoFileSize.args = {
  error: false,
  width: 215,
  helperText: '',
  uploadedFile: {
    uploadedFilename: 'file.tsc',
    uploadedThumbnailUrl: 'https://dummyimage.com/50x50/000/fff',
  },
  dropzoneOptions: {
    onDropAccepted: () => {
      // handle accepted files here
    },
    onDropRejected: () => {
      // handle rejected files here
    },
  },
};
export const HasUploadedFileNoFileUrl = Template.bind({});
HasUploadedFileNoFileUrl.args = {
  error: false,
  width: 215,
  helperText: '',
  uploadedFile: {
    uploadedFilename: 'file.tsc',
  },
  dropzoneOptions: {
    onDropAccepted: () => {
      // handle accepted files here
    },
    onDropRejected: () => {
      // handle rejected files here
    },
  },
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  error: false,
  loadingText: <div>Loading....</div>,
  width: 215,
  helperText: '',
  dropzoneOptions: {
    onDropAccepted: () => {
      // handle accepted files here
    },
    onDropRejected: () => {
      // handle rejected files here
    },
  },
};
