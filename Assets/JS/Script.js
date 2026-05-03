const orderBtn = document.getElementById('orderBtn');
const statusMsg = document.getElementById('statusMsg');

orderBtn.addEventListener('click', () => {
  orderBtn.disabled = true;
  orderBtn.querySelector('.text').textContent = 'Delivering...';
  statusMsg.textContent = '📦 Your order is on the way...';

  setTimeout(() => {
    orderBtn.disabled = false;
    orderBtn.querySelector('.text').textContent = 'Order Again';
    statusMsg.textContent = '✅ Delivered!';
  }, 3000);
});



