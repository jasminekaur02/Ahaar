import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2, ChevronLeft, ChevronRight, AlertCircle, ThermometerSun } from 'lucide-react';
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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

  // Calculate days until expiry
  const calculateDaysUntilExpiry = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

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
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Food Inventory Management</h1>
        <p className="text-sm text-gray-600">Track food items, expiry dates, and storage conditions</p>
      </div>

      {/* Expiry Alerts */}
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

      {/* Search and Filters */}
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

      {/* Inventory Table */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Storage</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {inventoryItems.map((item) => (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-sm text-gray-500">Batch: {item.batchNo}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.quantity} {item.unit}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div>{item.storage}</div>
                        <div className="text-sm text-gray-500">{item.storageTemp}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div>{item.expiry}</div>
                        <div className="text-sm text-gray-500">
                          {item.daysUntilExpiry} days left
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${getStatusColor(item.daysUntilExpiry)}`}>
                        {item.daysUntilExpiry <= 3 ? 'Critical Expiry' : 
                         item.daysUntilExpiry <= 7 ? 'Near Expiry' : 'Good'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setSelectedItem(item);
                            setShowUpdateModal(true);
                          }}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Edit2 className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                className="p-2 border rounded-md hover:bg-gray-50"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="text-sm text-gray-700">Page {currentPage}</span>
              <button
                onClick={() => setCurrentPage(prev => prev + 1)}
                className="p-2 border rounded-md hover:bg-gray-50"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Add Item Modal */}
      <Dialog open={showAddModal} onOpenChange={setShowAddModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Food Item</DialogTitle>
          </DialogHeader>
          <ItemForm />
        </DialogContent>
      </Dialog>

      {/* Update Item Modal */}
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