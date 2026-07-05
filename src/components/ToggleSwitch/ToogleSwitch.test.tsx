import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ToggleSwitch from './ToggleSwitch';
import React from 'react';

describe('ToggleSwitch Component', () => {
  it('debe renderizar con el estado inicial apagado', () => {
    render(<ToggleSwitch label="Prueba" defaultChecked={false} />);
    const switchElement = screen.getByRole('switch', { name: /prueba/i });
    expect(switchElement).not.toBeChecked();
  });

  it('debe cambiar a encendido al hacer clic', () => {
    render(<ToggleSwitch label="Prueba" defaultChecked={false} />);
    const switchElement = screen.getByRole('switch', { name: /prueba/i });
    fireEvent.click(switchElement);
    expect(switchElement).toBeChecked();
  });

  it('debe ejecutar la función onChange al hacer clic', () => {
    const handleChange = vi.fn();
    render(<ToggleSwitch label="Prueba" onChange={handleChange} />);
    const switchElement = screen.getByRole('switch', { name: /prueba/i });
    fireEvent.click(switchElement);
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('debe mostrar el texto del label correctamente', () => {
    render(<ToggleSwitch label="Modo Oscuro" />);
    expect(screen.getByText('Modo Oscuro')).toBeInTheDocument();
  });
});
