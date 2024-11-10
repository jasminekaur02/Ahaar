"use client";
import React, { useState, useEffect } from 'react';
import { Search, Plus, Edit2, Trash2, ChevronLeft, ChevronRight, AlertCircle, ThermometerSun } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";

const FoodInventorySystem = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [inventoryItems, setInventoryItems] = useState([]);

  // Define categories, storageTypes, and units arrays
  const categories = ['Dairy', 'Vegetables', 'Fruits', 'Meat'];
  const storageTypes = ['Frozen', 'Refrigerated', 'Dry'];
  const units = ['kg', 'g', 'lbs', 'oz'];

  // Fetch inventory items from the backend
  const fetchInventoryItems = async () => {
    try {
      const response = await fetch('/api/food'); // Adjust the endpoint as needed
      const data = await response.json();
      setInventoryItems(data);
    } catch (error) {
      console.error('Error fetching inventory items:', error);
    }
  };

  useEffect(() => {
    fetchInventoryItems();
  }, []);

  const handleAddItem = async (newItem) => {
    try {
      const response = await fetch('/api/food', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });
      if (response.ok) {
        fetchInventoryItems(); // Refresh the inventory
        setShowAddModal(false);
      } else {
        console.error('Error adding item:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleUpdateItem = async (updatedItem) => {
    try {
      const response = await fetch(`/api/food/${selectedItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });
      if (response.ok) {
        fetchInventoryItems(); // Refresh the inventory
        setShowUpdateModal(false);
        setSelectedItem(null);
      } else {
        console.error('Error updating item:', response.statusText);
      }
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      const response = await fetch(`/api/food/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchInventoryItems(); // Refresh the inventory
      } else {
        console.error('Error deleting item:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const ItemForm = ({ isUpdate = false, onSubmit }) => {
    const [formData, setFormData] = useState({
      name: '',
      category: '',
      quantity: '',
      unit: '',
      storageTemp: '',
      batchNo: '',
      expiry: '',
    });

    useEffect(() => {
      if (isUpdate && selectedItem) {
        setFormData({
          name: selectedItem.name,
          category: selectedItem.category,
          quantity: selectedItem.quantity,
          unit: selectedItem.unit,
          storageTemp: selectedItem.storageTemp,
          batchNo: selectedItem.batchNo,
          expiry: selectedItem.expiry,
        });
      }
    }, [isUpdate, selectedItem]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (isUpdate) {
        onSubmit(formData);
      } else {
        onSubmit({ ...formData, status: 'Good', daysUntilExpiry: 30 }); // Default values for new items
      }
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input 
            type="text" 
            name="name"
            className="w-full p-2 border rounded-md"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select 
              name="category"
              className="w-full p-2 border rounded-md"
              value={formData.category}
              onChange={handleChange}
              required
            >
              {categories.map(cat => (
                <option key={cat} value={cat.toLowerCase()}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Storage Type</label>
            <select 
              name="storageType"
              className="w-full p-2 border rounded-md"
              value={formData.storageType}
              onChange={handleChange}
              required
            >
              {storageTypes.map(type => (
                <option key={type} value={type.toLowerCase()}>{type}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Quantity</label>
            <input 
              type="number" 
              name="quantity"
              className="w-full p-2 border rounded-md"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Unit</label>
            <select 
              name="unit"
              className="w-full p-2 border rounded-md"
              value={formData.unit}
              onChange={handleChange}
              required
            >
              {units.map(unit => (
                <option key={unit} value={unit.toLowerCase()}>{unit}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Storage Temperature</label>
            <input 
              type="text" 
              name="storageTemp"
              className="w-full p-2 border rounded-md"
              placeholder="e.g., 2-4°C"
              value={formData.storageTemp}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Batch Number</label>
            <input 
              type="text" 
              name="batchNo"
              className="w-full p-2 border rounded-md"
              value={formData.batchNo}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Expiry Date</label>
          <input 
            type="date" 
            name="expiry"
            className="w-full p-2 border rounded-md"
            value={formData.expiry}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          {isUpdate ? 'Update Item' : 'Add Item'}
        </button>
      </form>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-800">Food Inventory Management</h1>
      <p className="text-sm text-gray-600">Track food items, expiry dates, and storage conditions</p>
    </div>

      <div className="space-y-2 mb-6">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Critical Expiry Alert: Chicken Breast expires in 3 days
          </AlertDescription>
        </Alert>
        <Alert variant="warning">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Important Note: Make sure to restock low items
          </AlertDescription>
        </Alert>
      </div>

      <div className="flex justify-end mb-4">
        <button
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          onClick={() => setShowAddModal(true)}
        >
          <Plus className="inline-block mr-2" />
          Add New Item
        </button>
      </div>

      <Dialog open={showAddModal || showUpdateModal} onOpenChange={(open) => {
          setShowAddModal(false);
          setShowUpdateModal(false);
        }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{showAddModal ? "Add New Item" : "Update Item"}</DialogTitle>
          </DialogHeader>
          <Card>
            <CardContent>
              <ItemForm isUpdate={showUpdateModal} onSubmit={showAddModal ? handleAddItem : handleUpdateItem} />
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>

      {/* Inventory table */}
      {/* Pagination */}
      {/* Add other elements as needed */}
    </div>
  );
};

export default FoodInventorySystem;
