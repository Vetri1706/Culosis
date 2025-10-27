import { useState } from 'react';
import { Immigrant } from '../../shared/types/api';

type DocumentViewerProps = {
  immigrant: Immigrant;
  onDocumentClick?: (field: string) => void;
};

export const DocumentViewer = ({ immigrant, onDocumentClick }: DocumentViewerProps) => {
  const [selectedDocument, setSelectedDocument] = useState<'passport' | 'medical' | 'permit'>(
    'passport'
  );

  const isFieldSuspicious = (field: string, value: any) => {
    // Check for common document violations
    if (field === 'name' && immigrant.document.name !== immigrant.name) return true;
    if (field === 'temperature' && value > 38) return true;
    if (field === 'vaccinationStatus' && value === false) return true;
    if (field === 'expiryDate') {
      const expiry = new Date(value);
      const today = new Date();
      if (expiry < today) return true;
    }
    return false;
  };

  const DocumentField = ({ label, value, field }: { label: string; value: any; field: string }) => {
    const suspicious = isFieldSuspicious(field, value);

    return (
      <div
        className={`p-3 rounded border-2 cursor-pointer transition-all hover:scale-105 ${
          suspicious
            ? 'border-red-500 bg-red-900/20 hover:bg-red-900/30'
            : 'border-gray-600 bg-gray-800/50 hover:bg-gray-700/50'
        }`}
        onClick={() => onDocumentClick?.(field)}
      >
        <div className="text-xs text-gray-400 uppercase font-semibold">{label}</div>
        <div className={`text-sm font-mono ${suspicious ? 'text-red-300' : 'text-white'}`}>
          {typeof value === 'boolean' ? (value ? '✓ YES' : '✗ NO') : value}
        </div>
        {suspicious && <div className="text-xs text-red-400 mt-1 animate-pulse">⚠️ SUSPICIOUS</div>}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      {/* Document Tabs */}
      <div className="flex gap-2">
        {[
          { id: 'passport', label: '📘 Passport', icon: '📘' },
          { id: 'medical', label: '🏥 Medical', icon: '🏥' },
          { id: 'permit', label: '📋 Permit', icon: '📋' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedDocument(tab.id as any)}
            className={`flex-1 p-3 rounded-lg font-semibold transition-all ${
              selectedDocument === tab.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            <div className="text-lg">{tab.icon}</div>
            <div className="text-xs">{tab.label.split(' ')[1]}</div>
          </button>
        ))}
      </div>

      {/* Document Content */}
      <div className="glass-dark rounded-xl p-6 border border-blue-500/20 min-h-[400px]">
        {selectedDocument === 'passport' && (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="text-2xl font-bold text-blue-400 mb-2">📘 PASSPORT</div>
              <div className="text-sm text-gray-400">
                REPUBLIC OF {immigrant.document.origin.toUpperCase()}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <DocumentField label="Full Name" value={immigrant.document.name} field="name" />
              <DocumentField label="ID Number" value={immigrant.document.id} field="id" />
              <DocumentField label="Age" value={`${immigrant.document.age} years`} field="age" />
              <DocumentField
                label="Blood Type"
                value={immigrant.document.bloodType || 'O+'}
                field="bloodType"
              />
              <DocumentField
                label="Issue Date"
                value={immigrant.document.issueDate}
                field="issueDate"
              />
              <DocumentField
                label="Expiry Date"
                value={immigrant.document.expiryDate}
                field="expiryDate"
              />
            </div>

            <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
              <div className="text-xs text-gray-400 mb-2">PURPOSE OF TRAVEL</div>
              <div className="text-white">{immigrant.document.reason}</div>
            </div>
          </div>
        )}

        {selectedDocument === 'medical' && (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="text-2xl font-bold text-green-400 mb-2">🏥 MEDICAL CERTIFICATE</div>
              <div className="text-sm text-gray-400">HEALTH SCREENING REPORT</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {immigrant.document.temperature && (
                <DocumentField
                  label="Body Temperature"
                  value={`${immigrant.document.temperature.toFixed(1)}°C`}
                  field="temperature"
                />
              )}

              <DocumentField
                label="Vaccination Status"
                value={immigrant.document.vaccinationStatus}
                field="vaccinationStatus"
              />

              {immigrant.document.bloodType && (
                <DocumentField
                  label="Blood Type"
                  value={immigrant.document.bloodType}
                  field="bloodType"
                />
              )}

              <DocumentField label="Medical Clearance" value="PENDING" field="clearance" />
            </div>

            {immigrant.document.symptoms && immigrant.document.symptoms.length > 0 && (
              <div className="mt-6 p-4 bg-red-900/20 rounded-lg border border-red-500/30">
                <div className="text-xs text-red-400 mb-2">⚠️ REPORTED SYMPTOMS</div>
                <div className="text-red-300">{immigrant.document.symptoms.join(', ')}</div>
              </div>
            )}

            {immigrant.document.scanResult && (
              <div className="mt-6 p-4 bg-cyan-900/20 rounded-lg border border-cyan-500/30">
                <div className="text-xs text-cyan-400 mb-2">🔬 SCAN RESULTS</div>
                <div className="text-cyan-300 font-mono text-sm">
                  {immigrant.document.scanResult}
                </div>
              </div>
            )}
          </div>
        )}

        {selectedDocument === 'permit' && (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <div className="text-2xl font-bold text-orange-400 mb-2">📋 ENTRY PERMIT</div>
              <div className="text-sm text-gray-400">BORDER CROSSING AUTHORIZATION</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <DocumentField label="Origin" value={immigrant.document.origin} field="origin" />
              <DocumentField
                label="Destination"
                value={immigrant.document.destination}
                field="destination"
              />
              <DocumentField
                label="Profession"
                value={immigrant.document.profession || 'Not Specified'}
                field="profession"
              />
              <DocumentField label="Duration" value="30 Days" field="duration" />
            </div>

            <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
              <div className="text-xs text-gray-400 mb-2">PERSONAL STATEMENT</div>
              <div className="text-white italic">"{immigrant.story}"</div>
            </div>

            <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
              <div className="text-xs text-gray-400 mb-2">PHYSICAL DESCRIPTION</div>
              <div className="text-white">{immigrant.appearance}</div>
            </div>
          </div>
        )}
      </div>

      {/* Document Violations Summary */}
      {immigrant.violations.length > 0 && (
        <div className="glass bg-red-900/20 rounded-xl p-4 border border-red-500/30">
          <div className="text-red-400 font-bold mb-2 flex items-center gap-2">
            <span className="text-xl">⚠️</span>
            POTENTIAL VIOLATIONS DETECTED
          </div>
          <div className="space-y-1">
            {immigrant.violations.map((violation, index) => (
              <div key={index} className="text-red-300 text-sm">
                • {violation}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
