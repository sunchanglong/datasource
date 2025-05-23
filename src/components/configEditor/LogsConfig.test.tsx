import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LogsConfig } from './LogsConfig';
import allLabels from 'labels';
import { columnLabelToPlaceholder } from 'data/utils';
import { defaultLogsTable } from 'otel';

describe('LogsConfig', () => {
  it('should render', () => {
    const result = render(
      <LogsConfig
        logsConfig={{}}
        onDefaultDatabaseChange={() => {}}
        onDefaultTableChange={() => {}}
        onOtelEnabledChange={() => {}}
        onOtelVersionChange={() => {}}
        onTimeColumnChange={() => {}}
        onLevelColumnChange={() => {}}
        onMessageColumnChange={() => {}}
        onSelectContextColumnsChange={() => {}}
        onContextColumnsChange={() => {}}
      />
    );
    expect(result.container.firstChild).not.toBeNull();
  });

  it('should call onDefaultDatabase when changed', () => {
    const onDefaultDatabaseChange = jest.fn();
    const result = render(
      <LogsConfig
        logsConfig={{}}
        onDefaultDatabaseChange={onDefaultDatabaseChange}
        onDefaultTableChange={() => {}}
        onOtelEnabledChange={() => {}}
        onOtelVersionChange={() => {}}
        onTimeColumnChange={() => {}}
        onLevelColumnChange={() => {}}
        onMessageColumnChange={() => {}}
        onSelectContextColumnsChange={() => {}}
        onContextColumnsChange={() => {}}
      />
    );
    expect(result.container.firstChild).not.toBeNull();

    const input = result.getByPlaceholderText(allLabels.components.Config.LogsConfig.defaultDatabase.placeholder);
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'changed' } });
    fireEvent.blur(input);
    expect(onDefaultDatabaseChange).toHaveBeenCalledTimes(1);
    expect(onDefaultDatabaseChange).toHaveBeenCalledWith('changed');
  });

  it('should call onDefaultTable when changed', () => {
    const onDefaultTableChange = jest.fn();
    const result = render(
      <LogsConfig
        logsConfig={{}}
        onDefaultDatabaseChange={() => {}}
        onDefaultTableChange={onDefaultTableChange}
        onOtelEnabledChange={() => {}}
        onOtelVersionChange={() => {}}
        onTimeColumnChange={() => {}}
        onLevelColumnChange={() => {}}
        onMessageColumnChange={() => {}}
        onSelectContextColumnsChange={() => {}}
        onContextColumnsChange={() => {}}
      />
    );
    expect(result.container.firstChild).not.toBeNull();

    const input = result.getByPlaceholderText(defaultLogsTable);
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'changed' } });
    fireEvent.blur(input);
    expect(onDefaultTableChange).toHaveBeenCalledTimes(1);
    expect(onDefaultTableChange).toHaveBeenCalledWith('changed');
  });




  it('should call onTimeColumnChange when changed', () => {
    const onTimeColumnChange = jest.fn();
    const result = render(
      <LogsConfig
        logsConfig={{}}
        onDefaultDatabaseChange={() => {}}
        onDefaultTableChange={() => {}}
        onOtelEnabledChange={() => {}}
        onOtelVersionChange={() => {}}
        onTimeColumnChange={onTimeColumnChange}
        onLevelColumnChange={() => {}}
        onMessageColumnChange={() => {}}
        onSelectContextColumnsChange={() => {}}
        onContextColumnsChange={() => {}}
      />
    );
    expect(result.container.firstChild).not.toBeNull();

    const input = result.getByPlaceholderText(columnLabelToPlaceholder(allLabels.components.Config.LogsConfig.columns.time.label));
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'changed' } });
    fireEvent.blur(input);
    expect(onTimeColumnChange).toHaveBeenCalledTimes(1);
    expect(onTimeColumnChange).toHaveBeenCalledWith('changed');
  });

  it('should call onLevelColumnChange when changed', () => {
    const onLevelColumnChange = jest.fn();
    const result = render(
      <LogsConfig
        logsConfig={{}}
        onDefaultDatabaseChange={() => {}}
        onDefaultTableChange={() => {}}
        onOtelEnabledChange={() => {}}
        onOtelVersionChange={() => {}}
        onTimeColumnChange={() => {}}
        onLevelColumnChange={onLevelColumnChange}
        onMessageColumnChange={() => {}}
        onSelectContextColumnsChange={() => {}}
        onContextColumnsChange={() => {}}
      />
    );
    expect(result.container.firstChild).not.toBeNull();

    const input = result.getByPlaceholderText(columnLabelToPlaceholder(allLabels.components.Config.LogsConfig.columns.level.label));
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'changed' } });
    fireEvent.blur(input);
    expect(onLevelColumnChange).toHaveBeenCalledTimes(1);
    expect(onLevelColumnChange).toHaveBeenCalledWith('changed');
  });

  it('should call onMessageColumnChange when changed', () => {
    const onMessageColumnChange = jest.fn();
    const result = render(
      <LogsConfig
        logsConfig={{}}
        onDefaultDatabaseChange={() => {}}
        onDefaultTableChange={() => {}}
        onOtelEnabledChange={() => {}}
        onOtelVersionChange={() => {}}
        onTimeColumnChange={() => {}}
        onLevelColumnChange={() => {}}
        onMessageColumnChange={onMessageColumnChange}
        onSelectContextColumnsChange={() => {}}
        onContextColumnsChange={() => {}}
      />
    );
    expect(result.container.firstChild).not.toBeNull();

    const input = result.getByPlaceholderText(columnLabelToPlaceholder(allLabels.components.Config.LogsConfig.columns.message.label));
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'changed' } });
    fireEvent.blur(input);
    expect(onMessageColumnChange).toHaveBeenCalledTimes(1);
    expect(onMessageColumnChange).toHaveBeenCalledWith('changed');
  });
});
