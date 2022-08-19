import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import {
  FileUpload,
  FileUploadProps,
} from 'src/components/file-upload/FileUpload';
import { withDesign } from 'storybook-addon-designs';

const ListMeta: Meta = {
  title: 'Amino/FileUpload',
  component: FileUpload,
  decorators: [withDesign],
  argTypes: {
    error: {
      type: 'boolean',
      description: 'Flag determine to render error border or not',
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

const Template: Story<FileUploadProps> = ({
  dropzoneOptions,
  error,
  helperText,
  loading,
  loadingText,
  onRemove,
  uploadedFile,
  width,
}: FileUploadProps) => {
  return (
    <FileUpload
      dropzoneOptions={dropzoneOptions}
      error={error}
      helperText={helperText}
      loading={loading}
      onRemove={onRemove}
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
