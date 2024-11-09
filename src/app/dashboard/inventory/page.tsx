"use client"; 
import React, { useState } from 'react';
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

  // Sample food inventory data
  const inventoryItems = [
    { 
      id: 1, 
      name: 'Milk', 
      category: 'Dairy', 
      quantity: 24, 
      unit: 'liters',
      expiry: '2024-11-15', 
      storage: 'Refrigerated',
      storageTemp: '2-4°C',
      batchNo: 'BAT123',
      status: 'Near Expiry',
      daysUntilExpiry: 5
    },
    { 
      id: 2, 
      name: 'Chicken Breast', 
      category: 'Meat', 
      quantity: 15, 
      unit: 'kg',
      expiry: '2024-11-13', 
      storage: 'Frozen',
      storageTemp: '-18°C',
      batchNo: 'BAT456',
      status: 'Critical Expiry',
      daysUntilExpiry: 3
    },
    { 
      id: 3, 
      name: 'Rice', 
      category: 'Dry Goods', 
      quantity: 100, 
      unit: 'kg',
      expiry: '2025-06-20', 
      storage: 'Room Temperature',
      storageTemp: '20-25°C',
      batchNo: 'BAT789',
      status: 'Good',
      daysUntilExpiry: 223
    },
  ];

  const categories = [
    'All',
    'Dairy',
    'Meat',
    'Seafood',
    'Fruits',
    'Vegetables',
    'Dry Goods',
    'Beverages',
    'Frozen Foods',
    'Canned Goods',
    'Condiments'
  ];

  const storageTypes = [
    'Refrigerated',
    'Frozen',
    'Room Temperature',
    'Cool and Dry'
  ];

  const units = [
    'kg',
    'liters',
    'pieces',
    'packages',
    'cans',
    'bottles'
  ];

  const getStatusColor = (daysUntilExpiry) => {
    if (daysUntilExpiry <= 3) return 'bg-red-100 text-red-800';
    if (daysUntilExpiry <= 7) return 'bg-yellow-100 text-yellow-800';
    return 'bg-green-100 text-green-800';
  };

  const ItemForm = ({ isUpdate = false }) => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input 
          type="text" 
          className="w-full p-2 border rounded-md"
          defaultValue={isUpdate ? selectedItem?.name : ''}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select className="w-full p-2 border rounded-md">
            {categories.map(cat => (
              <option key={cat} value={cat.toLowerCase()}>{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Storage Type</label>
          <select className="w-full p-2 border rounded-md">
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
            className="w-full p-2 border rounded-md"
            defaultValue={isUpdate ? selectedItem?.quantity : ''}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Unit</label>
          <select className="w-full p-2 border rounded-md">
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
            className="w-full p-2 border rounded-md"
            placeholder="e.g., 2-4°C"
            defaultValue={isUpdate ? selectedItem?.storageTemp : ''}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Batch Number</label>
          <input 
            type="text" 
            className="w-full p-2 border rounded-md"
            defaultValue={isUpdate ? selectedItem?.batchNo : ''}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Expiry Date</label>
        <input 
          type="date" 
          className="w-full p-2 border rounded-md"
          defaultValue={isUpdate ? selectedItem?.expiry : ''}
        />
      </div>
      <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
        {isUpdate ? 'Update Item' : 'Add Item'}
      </button>
    </div>
  );

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
            Near Expiry: Milk expires in 5 days
          </AlertDescription>
        </Alert>
        <Alert>
          <ThermometerSun className="h-4 w-4" />
          <AlertDescription>
            Storage Alert: Check freezer temperature for frozen items
          </AlertDescription>
        </Alert>
      </div>

      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search food items..."
                className="pl-10 p-2 w-full border rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              className="p-2 border rounded-md"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat} value={cat.toLowerCase()}>{cat}</option>
              ))}
            </select>
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              <Plus className="h-4 w-4" /> Add Food Item
            </button>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {inventoryItems.map(item => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.quantity} {item.unit}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.expiry}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(item.daysUntilExpiry)}`}>
                        {item.daysUntilExpiry <= 3 ? 'Critical Expiry' : 
                         item.daysUntilExpiry <= 7 ? 'Near Expiry' : 'Good'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                      <button
                        onClick={() => { setSelectedItem(item); setShowUpdateModal(true); }}
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex justify-end items-center space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="p-2 border rounded-md"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="text-sm font-medium">{currentPage}</span>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="p-2 border rounded-md"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Add Modal */}
      <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Food Item</DialogTitle>
          </DialogHeader>
          <ItemForm />
        </DialogContent>
      </Dialog>

      {/* Update Modal */}
      <Dialog open={showUpdateModal} onOpenChange={setShowUpdateModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Food Item</DialogTitle>
          </DialogHeader>
          <ItemForm isUpdate />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FoodInventorySystem;
