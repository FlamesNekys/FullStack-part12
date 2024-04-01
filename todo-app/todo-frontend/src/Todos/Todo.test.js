import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './Todo';

test('renders content', () => {
    const todo = {
        text: 'Test by Jest',
        done: false,
    };

    render(<Todo todo={todo} />);

    const element = screen.getByText('Test by Jest');
    expect(element).toBeDefined();
});

test('clicking the button calls event handler once', async () => {
    const todo = {
        text: 'Test by Jest',
        done: false,
    };

    const completeHandler = jest.fn();
    const deleteHandler = jest.fn();

    render(<Todo todo={todo} completeTodo={completeHandler} deleteTodo={deleteHandler} />);

    const user = userEvent.setup();
    const completeButton = screen.getByText('Set as done');
    const deleteButton = screen.getByText('Delete');
    await user.click(completeButton);
    await user.click(deleteButton);

    expect(completeHandler.mock.calls).toHaveLength(1);
    expect(deleteHandler.mock.calls).toHaveLength(1);
});
