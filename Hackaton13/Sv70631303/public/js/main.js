// Funcionalidad común para todas las páginas
document.addEventListener('DOMContentLoaded', () => {
  // Tooltips
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(tooltipTriggerEl => {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
  
  // Manejo de mensajes flash
  setTimeout(() => {
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
      bootstrap.Alert.getInstance(alert).close();
    });
  }, 5000);
});