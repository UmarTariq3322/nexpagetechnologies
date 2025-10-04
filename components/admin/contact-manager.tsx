"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Eye, Mail, Phone, Trash2 } from "lucide-react"

interface Contact {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  status: "new" | "contacted" | "closed"
  createdAt: string
}

const mockContacts: Contact[] = [
  {
    id: "1",
    name: "John Smith",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    company: "Tech Solutions Inc.",
    message: "Interested in your AI automation services for our e-commerce platform.",
    status: "new",
    createdAt: "2024-01-15",
  },
  {
    id: "2",
    name: "Sarah Wilson",
    email: "sarah@startup.com",
    phone: "+1 (555) 987-6543",
    company: "StartupCo",
    message: "Looking for a complete digital transformation package for our growing business.",
    status: "contacted",
    createdAt: "2024-01-14",
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike@company.com",
    message: "Need help with web development and branding for our new product launch.",
    status: "closed",
    createdAt: "2024-01-12",
  },
]

export function ContactManager() {
  const [contacts, setContacts] = useState<Contact[]>(mockContacts)
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)

  const updateStatus = (id: string, status: Contact["status"]) => {
    setContacts(contacts.map((contact) => (contact.id === id ? { ...contact, status } : contact)))
  }

  const deleteContact = (id: string) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
  }

  const getStatusColor = (status: Contact["status"]) => {
    switch (status) {
      case "new":
        return "destructive"
      case "contacted":
        return "default"
      case "closed":
        return "secondary"
      default:
        return "secondary"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold tracking-tight">Contact Management</h3>
        <p className="text-muted-foreground">Manage contact form submissions and inquiries</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Contacts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contacts.filter((c) => c.status === "new").length}</div>
            <p className="text-xs text-muted-foreground">Require attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contacts.filter((c) => c.status === "contacted").length}</div>
            <p className="text-xs text-muted-foreground">Being handled</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Closed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contacts.filter((c) => c.status === "closed").length}</div>
            <p className="text-xs text-muted-foreground">Completed</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Contact Submissions</CardTitle>
          <CardDescription>Manage and respond to customer inquiries</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contact</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{contact.name}</div>
                      <div className="text-sm text-muted-foreground">{contact.email}</div>
                      {contact.phone && <div className="text-sm text-muted-foreground">{contact.phone}</div>}
                    </div>
                  </TableCell>
                  <TableCell>{contact.company || "—"}</TableCell>
                  <TableCell>
                    <div className="max-w-xs truncate">{contact.message}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(contact.status)}>{contact.status}</Badge>
                  </TableCell>
                  <TableCell>{contact.createdAt}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="icon" variant="outline" onClick={() => setSelectedContact(contact)}>
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Contact Details</DialogTitle>
                            <DialogDescription>Full contact information and message</DialogDescription>
                          </DialogHeader>
                          {selectedContact && (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label className="text-sm font-medium">Name</Label>
                                  <p>{selectedContact.name}</p>
                                </div>
                                <div>
                                  <Label className="text-sm font-medium">Email</Label>
                                  <p>{selectedContact.email}</p>
                                </div>
                                {selectedContact.phone && (
                                  <div>
                                    <Label className="text-sm font-medium">Phone</Label>
                                    <p>{selectedContact.phone}</p>
                                  </div>
                                )}
                                {selectedContact.company && (
                                  <div>
                                    <Label className="text-sm font-medium">Company</Label>
                                    <p>{selectedContact.company}</p>
                                  </div>
                                )}
                              </div>
                              <div>
                                <Label className="text-sm font-medium">Message</Label>
                                <p className="mt-1 p-3 bg-muted rounded-md">{selectedContact.message}</p>
                              </div>
                              <div className="flex gap-2">
                                <Button
                                  onClick={() => updateStatus(selectedContact.id, "contacted")}
                                  disabled={selectedContact.status === "contacted"}
                                >
                                  Mark as Contacted
                                </Button>
                                <Button
                                  variant="outline"
                                  onClick={() => updateStatus(selectedContact.id, "closed")}
                                  disabled={selectedContact.status === "closed"}
                                >
                                  Mark as Closed
                                </Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>

                      <Button size="icon" variant="outline" asChild>
                        <a href={`mailto:${contact.email}`}>
                          <Mail className="h-4 w-4" />
                        </a>
                      </Button>

                      {contact.phone && (
                        <Button size="icon" variant="outline" asChild>
                          <a href={`tel:${contact.phone}`}>
                            <Phone className="h-4 w-4" />
                          </a>
                        </Button>
                      )}

                      <Button size="icon" variant="outline" onClick={() => deleteContact(contact.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>
}
