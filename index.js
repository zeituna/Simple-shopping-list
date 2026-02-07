const API_URL = 'http://localhost:3000/items';

const itemForm = document.getElementById('itemForm');
const itemNameInput = document.getElementById('itemName');
const categoryInput = document.getElementById('category');
const quantityInput = document.getElementById('quantity');
const statusInput = document.getElementById('status');
const submitBtn = document.getElementById('submitBtn');
const editIdInput = document.getElementById('editId');
const itemsTableBody = document.getElementById('itemsTableBody');
const itemsContainer = document.getElementById('itemsContainer');

let isEditMode = false;

async function fetchItems() {
    try {
        const response = await fetch(API_URL);
        const items = await response.json();
        displayItems(items);
        displayItemCards(items);
    } catch (error) {
        console.error('Error fetching items:', error);
    }
}

function displayItems(items) {
    itemsTableBody.innerHTML = '';
    items.forEach(item => {
        const row = document.createElement('tr');
        const badgeClass = item.status === 'Purchased' ? 'badge-purchased' : 'badge-needed';
        row.innerHTML = `
            <td class="fw-semibold">${item.itemName}</td>
            <td>${item.category}</td>
            <td>${item.quantity}</td>
            <td><span class="badge ${badgeClass}">${item.status}</span></td>
            <td>
                <button class="btn btn-sm btn-warning me-2" onclick="editItem(${item.id})">
                    <i class="bi bi-pencil"></i> Edit
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteItem(${item.id})">
                    <i class="bi bi-trash"></i> Delete
                </button>
            </td>
        `;
        itemsTableBody.appendChild(row);
    });
}

function displayItemCards(items) {
    itemsContainer.innerHTML = '';
    const displayItems = items.slice(0, 6);
    displayItems.forEach(item => {
        const badgeClass = item.status === 'Purchased' ? 'badge-purchased' : 'badge-needed';
        const card = document.createElement('div');
        card.className = 'col-md-6 col-lg-4';
        card.innerHTML = `
            <div class="item-card p-4 h-100">
                <div class="d-flex justify-content-between align-items-start mb-3">
                    <h5 class="fw-bold mb-0">${item.itemName}</h5>
                    <span class="badge ${badgeClass}">${item.status}</span>
                </div>
                <p class="text-muted mb-2">
                    <i class="bi bi-tag me-2"></i>${item.category}
                </p>
                <p class="text-muted mb-0">
                    <i class="bi bi-box-seam me-2"></i>Quantity: ${item.quantity}
                </p>
            </div>
        `;
        itemsContainer.appendChild(card);
    });
}

itemForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const itemData = {
        itemName: itemNameInput.value,
        category: categoryInput.value,
        quantity: parseInt(quantityInput.value),
        status: statusInput.value
    };

    try {
        if (isEditMode) {
            const id = editIdInput.value;
            await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(itemData)
            });
            isEditMode = false;
            submitBtn.textContent = 'Add Item';
            editIdInput.value = '';
        } else {
            await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(itemData)
            });
        }
        
        itemForm.reset();
        fetchItems();
    } catch (error) {
        console.error('Error saving item:', error);
    }
});

async function editItem(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const item = await response.json();
        
        itemNameInput.value = item.itemName;
        categoryInput.value = item.category;
        quantityInput.value = item.quantity;
        statusInput.value = item.status;
        editIdInput.value = id;
        
        isEditMode = true;
        submitBtn.textContent = 'Update Item';
        
        document.getElementById('itemForm').scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (error) {
        console.error('Error fetching item:', error);
    }
}

async function deleteItem(id) {
    if (confirm('Are you sure you want to delete this item?')) {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });
            fetchItems();
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    }
}

fetchItems();