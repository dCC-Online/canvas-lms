/*
 * Copyright (C) 2018 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

export function mockAssignment(overrides = {}) {
  return {
    lid: '7',
    gid: 'QXNzaWdubWVudC03',
    name: 'Assignment',
    description: '<p>description</p>',
    dueAt: '2018-07-11T18:59:59-06:00',
    pointsPossible: 10,
    lockAt: null,
    unlockAt: null,
    state: 'published',
    course: {
      lid: '1',
      __typename: 'Course'
    },
    modules: [],
    assignmentGroup: {
      name: 'Assignments',
      lid: '1',
      __typename: 'AssignmentGroup'
    },
    lockInfo: {
      isLocked: true,
      __typename: 'LockInfo'
    },
    submissionsConnection: {
      nodes: [],
      __typename: 'SubmissionConnection'
    },
    __typename: 'Assignment',
    ...overrides
  }
}
