import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

type CategoryItemProps = {
  active: boolean;
}

// 위에 타입과 중복 되는 부분을 &로 합침
type GatsbyLinkProps = {
  children: ReactNode;
  className?: string;
  to: string;
} & CategoryItemProps

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 100px auto 0;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
    padding: 0 20px;
  }
`
// 이는 active라는 이름의 props가 boolean 형태라서 그런데요, 단순히 이 값을 문자열 형태로 바꿔주어도 해결이 가능하지만 저희는 다른 방법으로 이 문제를 해결해봅시다.
// 문제는 결국 active 속성이라는 것입니다.
// 그럼, 이 속성을 Styled Component에서 Props로 받아서 처리만 하게끔 구현할 수는 없을까요?
// 이를 위해 styled 함수의 매개변수로 Link 함수만 넘기던 것을 아래와 같이 변형할 수 있습니다.

// 주석은 active 파라미터가 사용되지 않아 뜨는 경고문을 무시하기 위한 용도인데, 남용하면 프로젝트 구조가 엉망이 될 수 있으니 주의해주세요.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          #{name}({count})
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  )
}

export default CategoryList